import React from 'react';
import Button from './Button';
import Tag from './Tag';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  type: string;
  skills: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  type,
  skills,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[250px] md:min-h-[280px] flex flex-col">
      {/* Job Type Tag */}
      <div className="mb-4">
        <Tag variant="outline">{type}</Tag>
      </div>

      {/* Job Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>

      {/* Company & Location */}
      <div className="mb-6">
        <p className="text-gray-600 text-m ml-4">{company}</p>
        <p className="text-gray-500 text-m ml-4">{location}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mb-7 flex-grow">
        {skills.map((skill) => (
          <Tag key={skill} variant="outline">
            {skill}
          </Tag>
        ))}
      </div>

      {/* View Details Button */}
      <Button
        variant="primary"
        href={`/jobs/${id}`}
        className="w-full py-3"
      >
        View Details
      </Button>
    </div>
  );
};

export default JobCard;
