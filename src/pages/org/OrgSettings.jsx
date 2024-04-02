import React, { useState, useEffect } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
const sample_logo = "https://i.pinimg.com/originals/33/32/db/3332db2e45a36222e63ad99da6513cbc.png";

const OrgSettings = () => {
    const [organizationData, setOrganizationData] = useState({
        name: '',
        acronym: '',
        logo: '',
        about: '',
        type: '',
        president: ''
    });
    const [logoPreview, setLogoPreview] = useState(null);

    useEffect(() => {
        // Sample data for editing organization
        const sampleData = {
            name: 'Google Developer Student Club',
            acronym: 'GDSC',
            logo: 'https://i.pinimg.com/originals/33/32/db/3332db2e45a36222e63ad99da6513cbc.png',
            about: 'Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
            type: 'technical',
            president: 'Vijay Vardhan Reddy'
        };
        setOrganizationData(sampleData);
        setLogoPreview(sampleData.logo);
    }, []);

	const handleLogoChange = (event) => {
		const file = event.target.files[0];
		if (file) {
            setOrganizationData({ ...organizationData, logo: file });
			const reader = new FileReader();
			reader.onloadend = () => {
				setLogoPreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

    const handleImageRemove = () => {
        setOrganizationData({ ...organizationData, logo: '' });
        setLogoPreview(null);
    };

  return (
    <div className='p-4 flex flex-col flex-grow justify-center items-center'>
        <div className='w-10/12 sm:w-8/12 border-2 p-8 rounded-lg space-y-8'>
            <div className='relative w-32 h-32 border mx-auto aspect-square rounded-full'>
                {logoPreview ? (
                    <>
                        <img src={logoPreview} alt="Logo Preview" className="w-full h-full object-cover rounded-full" />
                        <button className="absolute bottom-0 right-0" onClick={handleImageRemove}>
                            <IoRemoveCircleOutline className="text-red-500 text-4xl" />
                        </button>
                    </>
                ) : (
                    <>
                        <label htmlFor="imageInput" className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                            <IoAddCircleOutline className="text-gray-500 text-4xl" />
                        </label>
                        <input id="imageInput" type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleLogoChange} />
                    </>
                )}
                {!logoPreview && (
                    <img src={sample_logo} alt="Sample Image" className="w-full h-full object-cover rounded-full" />
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="organization_name">Organization Name</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="organization_name" id="organization_name" placeholder='Enter the organization name' value={organizationData.name} />
                <label htmlFor="acronym">Acronym</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="acronym" id="organization_name" placeholder='Enter the acronym for organization' value={organizationData.acronym} />
                <label htmlFor="about">About</label>
                <textarea className='border-2 border-gray-300 px-3 py-2 rounded-lg' name="about" id="about" rows="5" placeholder='About the organization' value={organizationData.about} />
                <label htmlFor="org_type">Type</label>
                <select className='border-2 border-gray-300 px-3 py-2 rounded-lg' name="org_type" id="org_type" value={organizationData.type}>
                    <option value="" disabled hidden>Select organization category</option>
                    <option value="technical">Technical</option>
                    <option value="cultural">Cultural</option>
                    <option value="literary">Literary</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button className='w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg'>Edit</button>
        </div>
    </div>
  );
}

export default OrgSettings;
