import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import sample_logo from "../../assets/org_sample_logo.png";
import { updateOrg } from "../../store/slices/userSlice";
import api from "../../api";

const OrgSettings = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const activeOrg = useSelector((store) => store.user.activeOrg);
	const [logoPreview, setLogoPreview] = useState({
		image: activeOrg.logo.url ? activeOrg.logo.url : sample_logo,
		edited: false,
	});
	const [organizationData, setOrganizationData] = useState({
		name: activeOrg.name,
		acronym: activeOrg.acronym,
		logo: activeOrg.logo,
		about: activeOrg.about,
		type: activeOrg.type,
	});

    console.log(organizationData.type);

	const onInputChange = (e) => {
		setOrganizationData((prevOrgData) => ({
			...prevOrgData,
			[e.target.name]: e.target.value,
		}));
	};

	const profileUpdateHandler = async () => {
		try {
			if (
				!organizationData.name ||
				!organizationData.acronym ||
				!organizationData.about ||
				!organizationData.type ||
				!organizationData.logo
			) {
				toast.error("All the fields are required");
				return;
			}
			const formData = new FormData();
			for (const key in organizationData) {
				if (key === "logo" && logoPreview.edited)
					formData.append(key, organizationData[key]);
				else formData.append(key, organizationData[key]);
			}
			const { data } = await api.put(
				`/organization/update/${activeOrg._id}`,
				formData
			);
			console.log(data);
			if (data.success) {
				toast.success(data.message);
				dispatch(updateOrg({ data: data.org }));
				navigate(`/org_profile/${activeOrg._id}/portfolio`);
			} else {
				toast.error(data.message);
			}
		} catch (err) {
            console.log(err);
			toast.error(err);
		}
	};

	const handleLogoChange = (event) => {
		const file = event.target.files[0];
		setOrganizationData((prevOrgData) => ({
			...prevOrgData,
			logo: file,
		}));
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setLogoPreview({
				image: reader.result,
				edited: true,
			});
		};
	};

	return (
		<div className="p-4 flex flex-col flex-grow justify-center items-center">
			<div className="w-10/12 sm:w-8/12 border-2 p-8 rounded-lg space-y-8">
				<div className="relative w-32 h-32 border mx-auto aspect-square rounded-full">
					{logoPreview.edited ? (
						<>
							<img
								src={logoPreview.image}
								alt="Logo Preview"
								className="w-full h-full object-cover rounded-full"
							/>
							<button
								className="absolute bottom-0 right-0"
								onClick={() => {
									setLogoPreview({
										image: activeOrg.logo.url
											? activeOrg.logo.url
											: sample_logo,
										edited: false,
									});
									setOrganizationData((prevOrgData) => ({
										...prevOrgData,
										logo: activeOrg.logo.url
											? activeOrg.logo.url
											: sample_logo,
									}));
								}}
							>
								<IoRemoveCircleOutline className="text-red-500 text-4xl" />
							</button>
						</>
					) : (
						<>
							<label
								htmlFor="logo"
								className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
							>
								<IoAddCircleOutline className="text-green-500 text-4xl" />
							</label>
							<input
								id="logo"
								type="file"
								accept=".png, .jpg, .jpeg"
								className="hidden"
								onChange={handleLogoChange}
							/>
						</>
					)}
					{!logoPreview.edited && (
						<img
							src={logoPreview.image}
							alt="Sample Image"
							className="w-full h-full object-cover rounded-full"
						/>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="name">Organization Name</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="name"
						id="name"
						placeholder="Enter the organization name"
						value={organizationData.name}
						onChange={onInputChange}
					/>
					<label htmlFor="acronym">Acronym</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="acronym"
						id="acronym"
						placeholder="Enter the acronym for organization"
						value={organizationData.acronym}
						onChange={onInputChange}
					/>
					<label htmlFor="about">About</label>
					<textarea
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="about"
						id="about"
						rows="5"
						placeholder="About the organization"
						value={organizationData.about}
						onChange={onInputChange}
					/>
					<label htmlFor="type">Type</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="type"
						id="type"
						value={organizationData.type}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>
							Select organization category
						</option>
						<option value="Technical">Technical</option>
						<option value="Cultural">Cultural</option>
						<option value="Literary">Literary</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<button
					onClick={profileUpdateHandler}
					className="w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg"
				>
					Edit
				</button>
			</div>
		</div>
	);
};

export default OrgSettings;
