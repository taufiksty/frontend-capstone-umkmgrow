import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AccordionModules({ courseId, modulesData }) {
	return (
		<Accordion
			allowMultiple
			className="p-3 md:p-5 md:text-xl space-y-3">
			{modulesData.map((module, i) => (
				<AccordionItem
					key={module.id}
					header={`Bagian ${module.moduleSequence} : ${module.moduleName}`}
					className={`text-left space-y-3 ${
						modulesData.length - 1 !== i && 'border-b pb-3 border-slate-300'
					}`}>
					{module.contents.map((content, i) => (
						<Link
							to={`/courses/${courseId}/modules?moduleId=${module.id}&contentId=${content.id}`}
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
	);
}

export default AccordionModules;

AccordionModules.propTypes = {
	courseId: PropTypes.string,
	modulesData: PropTypes.array,
};
