import React, { useState } from 'react';
import PropertyBanner from '../../components/designOwnFlyer/PropertyBanner';
import template1 from '../../assets/singleProperty/template1.png';
import template2 from '../../assets/singleProperty/template2.png';
import template3 from '../../assets/singleProperty/template3.png';
import template4 from '../../assets/singleProperty/template4.png';
import template5 from '../../assets/singleProperty/template5.png';

const TemplateCard = ({ template, handleUseTemplate }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-lg shadow-md h-fit p-4 flex flex-col items-center">
      <div className="relative h-fit mb-4">
        <img 
          src={template.templatePreview} 
          alt={template.templateName}
          className="w-full h-full object-contain  rounded-lg"
        />
      </div>
      <button 
        className=" hover:text-white bg-white text-black px-8 py-2 rounded-md hover:bg-secondary transition-colors w-full "
        onClick={()=>handleUseTemplate(template.id)}
      >
        Use Template
      </button>
    </div>
  );
};

const SingleProperty = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleUseTemplate = (templateId) => {
        console.log('Selected Template ID:', templateId);
        setSelectedTemplate(templateId);
    };

    return (
        <div className="mx-auto p-6">
            <PropertyBanner />

            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto h-screen overflow-auto">
                    {singlePropertyTemplates.map((template) => (
                        <TemplateCard 
                            key={template.id} 
                            template={template} 
                            handleUseTemplate={handleUseTemplate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const singlePropertyTemplates = [
    {
        id: '1',
        templateName: 'Template 1',
        templatePreview: template1,
    },
    {
        id: '2',
        templateName: 'Template 2',
        templatePreview: template2,
    },
    {
        id: '3',
        templateName: 'Template 3',
        templatePreview: template3,
    },
    {
        id: '4',
        templateName: 'Template 4',
        templatePreview: template4,
    },
    {
        id: '5',
        templateName: 'Template 5',
        templatePreview: template5,
    },
];

export default SingleProperty;