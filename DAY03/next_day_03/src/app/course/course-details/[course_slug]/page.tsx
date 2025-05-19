import UpgradeCount from "@/app/components/upgradeCount";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";
interface Props {
  params: {
    course_slug: string;
  };
}

const searchDb = async (course_name: string) => {
  const courses: Record<string, string> = {
    "course-1": "Course 1 begins!",
    "course-2": "Course 2 begins!",
    "course-3": "Course 3 begins!",
    "course-4": "Course 4 begins!",
    "course-5": "Course 5 begins!",
  };

  return courses[course_name] || null;
};

export default async function CourseSlug({ params }: Props) {
  const resolvedParams = await params;
  const param_value = await searchDb(resolvedParams.course_slug);

  return (
    <div>
      <Link href="/course">
        <IoArrowBackCircle
          className="absolute top-20 left-4 text-white hover:scale-110 transform transition-transform duration-200 cursor-pointer"
          size={40}
        />
      </Link>

      <h1 className="mt-20 text-3xl text-center">
        {param_value ? `Welcome to the ${param_value}` : "No courses found"}
      </h1>

      <h1 className="mt-20 text-3xl text-center">
        <UpgradeCount />
      </h1>
    </div>
  );
}
