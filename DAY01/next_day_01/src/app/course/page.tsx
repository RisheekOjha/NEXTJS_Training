import Link from "next/link";

export default function Course() {
  return (
    <div className="flex flex-col">
      <h1 className="m-auto  text-4xl text-center">
        Welcome to playlist of courses
      </h1>
      <div className="flex flex-col mt-10 text-center gap-8">
        <Link href="/course/course-details/course-1">Course 1</Link>
        <Link href="/course/course-details/course-2">Course 2</Link>
        <Link href="/course/course-details/course-3">Course 3</Link>
        <Link href="/course/course-details/course-4">Course 4</Link>
        <Link href="/course/course-details/course-5">Course 5</Link>
      </div>
    </div>
  );
}
