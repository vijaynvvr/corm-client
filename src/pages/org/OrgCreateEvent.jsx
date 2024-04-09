import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import api from "../../api";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import sample_logo from '../../assets/event_sample_logo.jpeg';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { tags } from "../../utils/tags"

const OrgCreateEvent = () => {
    const navigate = useNavigate();
    const activeOrg = useSelector(store => store.user.activeOrg);

	const [eventData, setEventData] = useState({
		title: "",
		description: "",
		venue: "",
		eventTime: "",
		mode: "",
		tag: [],
		category: "",
        organizer: activeOrg._id,
		logo: null,
	});
	const [imagePreview, setImagePreview] = useState(null);

	const handleLogoChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setEventData((prevData) => ({ ...prevData, logo: file }));
			setImagePreview(reader.result);
		};
	};

	const onInputChange = (e) => {
		setEventData((prevData) => ({ ...prevData, [e.target.name]: e.target.value}));
	};

	const onSubmit = async () => {
        try {
            if (
                !eventData.title ||
                !eventData.description ||
                !eventData.venue ||
                !eventData.eventTime ||
                !eventData.mode ||
                !eventData.tag ||
                !eventData.category ||
                !eventData.logo
            ) {
                toast.error("Please fill all the fields");
                return;
            } else {
                const formData = new FormData();
                for (const key in eventData) {
                    formData.append(key, eventData[key]);
                }
                const { data } = await api.post(`/event/createEvent`, formData);
                if (data.success) {
                    toast.success(data.message);
                    navigate(`/org_profile/${activeOrg._id}/events`)
                }
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
	};

    return (
		<div className="p-4 flex flex-col flex-grow justify-center items-center">
			<div className="w-10/12 sm:w-6/12 border-2 p-8 rounded-lg space-y-8">
				<div className="space-y-3 text-center">
					<h1 className="font-semibold text-3xl">
						Create an Event
					</h1>
					<p className="font-semibold text-lg text-gray-400">
						Enter the information below to create a new
						Event.
					</p>
					<div className="relative w-32 h-32 border mx-auto aspect-square rounded-full">
						{imagePreview ? (
							<>
								<img
									src={imagePreview}
									alt="Logo Preview"
									className="w-full h-full object-cover rounded-full"
								/>
								<button
									className="absolute bottom-0 right-0"
									onClick={() => {
										setImagePreview(null);
										setOrganizationData((prevData) => ({
											...prevData,
											logo: null,
										}));
									}}
								>
									<IoRemoveCircleOutline className="text-red-500 text-4xl" />
								</button>
							</>
						) : (
							<>
								<label
									htmlFor="imageInput"
									className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
								>
									<IoAddCircleOutline className="text-gray-500 text-4xl" />
								</label>
								<input
									id="imageInput"
									type="file"
									accept=".png, .jpg, .jpeg"
									className="hidden"
									onChange={handleLogoChange}
								/>
							</>
						)}
						{!imagePreview && (
							<img
								src={sample_logo}
								alt="Sample Image"
								className="w-full h-full object-cover rounded-full"
							/>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="organization_name">Event Title</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="title"
						id="title"
						placeholder="Enter the event title"
						value={eventData.title}
						onChange={onInputChange}
					/>
					<label htmlFor="description">Description</label>
					<textarea
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="description"
						id="description"
						rows="5"
						placeholder="Event description"
						value={eventData.description}
						onChange={onInputChange}
					/>
					<label htmlFor="venue">Venue</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="venue"
						id="venue"
						placeholder="Event venue"
						value={eventData.venue}
						onChange={onInputChange}
					/>
					<label htmlFor="eventTime">Event Time</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="datetime-local"
						name="eventTime"
						id="eventTime"
						placeholder="Event Time"
						value={eventData.eventTime}
						onChange={onInputChange}
					/>
					<label htmlFor="mode">Event Mode</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="mode"
						id="mode"
						value={eventData.mode}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>
							Select event mode
						</option>
						<option value="In-Person">In-Person</option>
						<option value="Virtual">Virtual</option>
						<option value="Hybrid">Hybrid</option>
					</select>
					<label htmlFor="mode">Event Tag</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="tag"
						id="tag"
						value={eventData.tag}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>
							Select event tag
						</option>
                        {tags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
					</select>
					<label htmlFor="category">Event Category</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="category"
						id="category"
						value={eventData.category}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>
							Select event category
						</option>
						<option value="Info Session">Info Session</option>
						<option value="Speaker Session">Speaker Session</option>
                        <option value="Panel Discussion">Panel Discussion</option>
						<option value="Workshop">Workshop</option>
						<option value="Hackathon">Hackathon</option>
						<option value="Bootcamp">Bootcamp</option>
						<option value="Contest">Contest</option>
						<option value="Recreation">Recreation</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<button
					onClick={onSubmit}
					className="w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg"
				>
					Create
				</button>
			</div>
		</div>
    )
}

export default OrgCreateEvent;