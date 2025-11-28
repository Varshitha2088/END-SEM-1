import Image from "next/image";

export default function StudentProfile() {
  // JSON object with student details
  const student = {
    name: "John Doe",
    rollNumber: "22CS101",
    department: "Computer Science",
    image: "/profile.jpg", // place an image inside public/profile.jpg
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center space-y-4">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src={student.image}
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Student Details */}
        <h2 className="text-2xl font-semibold text-gray-800">{student.name}</h2>
        <p className="text-gray-600 text-lg">Roll Number: {student.rollNumber}</p>
        <p className="text-gray-600 text-lg">Department: {student.department}</p>
      </div>
    </div>
  );
}