import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CourseItem({ courses, course, i }) {
	return (
		<Link to={`/courses/${course.id}`}>
			<div
				className={`flex flex-col md:flex-row gap-5 py-3 hover:bg-slate-100 cursor-pointer ${
					i === courses.length - 1 ? '' : 'border-b border-zinc-300'
				}`}>
				<img
					className="w-full md:w-52 rounded-md"
					src={course.imageCourse}
					alt="imgCourse"
				/>
				<div>
					<h4 className="font-semibold">{course.courseName}</h4>
					<p className="text-[14px]">{course.courseDescription}</p>
				</div>
				<h4 className="text-red-600 ml-auto">{course.price || 'Gratis'}</h4>
			</div>
		</Link>
	);
}

export default CourseItem;

CourseItem.propTypes = {
	courses: PropTypes.array,
	course: PropTypes.object,
	i: PropTypes.number,
};
