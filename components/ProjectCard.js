import Image from 'next/image';

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-secondary-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
