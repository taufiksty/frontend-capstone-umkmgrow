import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function ClassPage() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const moduleId = queryParams.get('moduleId');
	const contentId = queryParams.get('contentId');

	const modulesData = useSelector((state) => state.course.data.modules);

	const module = modulesData?.find((m) => m.id === moduleId);
	const content = module?.contents.find((c) => c.id === contentId);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handlePrevContent(e) {
		e.preventDefault();

		if (module.moduleSequence === 1 && content.contentSequence === 1) {
			navigate(`/courses/${id}`);
		} else if (content.contentSequence === 1) {
			const modulePrev = modulesData[module.moduleSequence - 2];
			const lastContentId =
				modulePrev.contents[modulePrev.contents.length - 1].id;
			navigate(
				`/courses/${id}/modules?moduleId=${modulePrev.id}&contentId=${lastContentId}`,
			);
		} else {
			const contentPrev = module.contents[content.contentSequence - 2];
			navigate(
				`/courses/${id}/modules?moduleId=${module.id}&contentId=${contentPrev.id}`,
			);
		}
	}

	function handleNextContent(e) {
		e.preventDefault();
		const lenModules = modulesData.length;
		const lenContents = module.contents.length;
		const isLastModule = module.moduleSequence === lenModules;
		const isLastContent = content.contentSequence === lenContents;

		if (isLastModule) {
			dispatch();
			navigate(`/courses/${id}/exams?=`);
		} else if (isLastContent) {
			const moduleNext = modulesData[module.moduleSequence];
			const nextContentOnModuleNextId = moduleNext.contents[0].id;
			navigate(
				`/courses/${id}/modules?moduleId=${moduleNext.id}&contentId=${nextContentOnModuleNextId}`,
			);
		} else {
			navigate(
				`/courses/${id}/modules?moduleId=${module.id}&contentId=${
					module.contents[content.contentSequence].id
				}`,
			);
		}
	}

	return (
		<>
			<Navbar variant="secondary" />

			<main className="mx-[6px] pt-40 px-2 md:mx-[145px]">
				<div className="md:my-[36px]">
					<h1 className="font-bold text-2xl text-[#2E3646] md:font-bold md:text-4xl">
						Bagian <span>{module.moduleSequence}</span> :{' '}
						<span id="module-name">{module.moduleName}</span>
					</h1>
					<p
						id="sub-materi"
						className="text-xs text-slate-700 mt-[8px] md:mt-[32px] md:text-2xl">
						{content.contentDescription}.
					</p>
				</div>

				<div className="md:flex md:space-x-20">
					<div className="md:basis-3/4">
						<div
							id="materi"
							className="mt-[34px]">
							{content.contentType === 'video' ? (
								<iframe
									className="w-full h-[240px] md:h-[525px]"
									src={content.content}
									title={content.contentDescription}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
							) : (
								<div
									dangerouslySetInnerHTML={{ __html: content.content }}
									className="text-[#2E3646] border border-slate-300 rounded-md p-3 max-h-[360px] md:max-h-[560px] overflow-scroll"
								/>
							)}
						</div>

						<div className="my-[34px] md:my-[46px] flex justify-between">
							<Button
								variant="secondary"
								onClick={handlePrevContent}>
								Materi Sebelumnya
							</Button>
							<Button onClick={handleNextContent}>Materi Selanjutnya</Button>
						</div>
					</div>

					<div
						id="list-materi"
						className="my-[34px] rounded-[10px] border border-slate-300 md:h-fit md:basis-1/4">
						<Accordion
							allowMultiple
							className="p-3 md:p-5 md:text-xl space-y-3">
							{modulesData.map((module, i) => (
								<AccordionItem
									key={module.id}
									header={`Bagian ${module.moduleSequence} : ${module.moduleName}`}
									className={`text-left space-y-3 ${
										modulesData.length - 1 !== i &&
										'border-b pb-3 border-slate-300'
									}`}>
									{module.contents.map((content, i) => (
										<Link
											to={`/courses/${id}/modules?moduleId=${module.id}&contentId=${content.id}`}
											key={content.id}
											className="text-blue-500 underline mt-3 ml-7 md:ml-0 text-md md:text-xl hover:opacity-70">
											<p>
												{i + 1}. {content.contentDescription}
											</p>
										</Link>
									))}
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default ClassPage;
