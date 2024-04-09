import React, { useEffect, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';
import sample_event_logo from "../../assets/event_sample_logo.jpeg";
import api from "../../api";

const OrgEditEvent = () => {
	const navigate = useNavigate();
    const location = useLocation();
    const eventId = location.pathname.split('/')[4];
    const activeOrg = useSelector((store) => store.user.activeOrg);
	const [logoPreview, setLogoPreview] = useState({
        initialImg: null,
		image: sample_event_logo,
		edited: false,
	});

	const [eventData, setEventData] = useState({
		title: "",
		description: "",
		venue: "",
		eventTime: "",
		mode: "",
		tag: "",
		category: "",
		logo: null,
	});

	const onInputChange = (e) => {
		setEventData((prevEventData) => ({
			...prevEventData,
			[e.target.name]: e.target.value,
		}));
	};

	const eventUpdateHandler = async () => {
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
				toast.error("All the fields are required");
				return;
			}
			const formData = new FormData();
			for (const key in eventData) {
				if (key === "logo" && !logoPreview.edited) continue;
				formData.append(key, eventData[key]);
			}
			const { data } = await api.put(
				`/event/updateEvent/${eventId}`,
				formData
			);
			if (data.success) {
				toast.success(data.message);
				navigate(`/org_profile/${activeOrg._id}/events`);
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
		setEventData((prevEventData) => ({
			...prevEventData,
			logo: file,
		}));
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setLogoPreview(prevData => ({
				...prevData,
                image: reader.result,
				edited: true,
			}));
		};
	};

    useEffect(() => {
        const fetchEventData = async () => {
            const {data} = await api.get(`/event/fetchEvent/${eventId}`);
            setEventData({
                title: data.event.title,
                description: data.event.description,
                venue: data.event.venue,
                eventTime: new Date(data.event.eventTime).toISOString().slice(0, 16),
                mode: data.event.mode,
                tag: data.event.tag,
                category: data.event.category,
                logo: data.event.logo.url,
            });
            setLogoPreview(prevData => ({
                ...prevData,
                initialImg: data.event.logo.url,
                image: data.event.logo.url
            }))
        }
        fetchEventData();
    }, []);

	return (
		<div className="p-4 flex flex-col flex-grow justify-center items-center">
			<div className="w-10/12 sm:w-8/12 border-2 p-8 rounded-lg space-y-8">
				<div className="relative w-32 h-32 border mx-auto aspect-square rounded-full">
					{logoPreview.edited ? (
						<>
							<img
								src={logoPreview.image ? logoPreview.image : sample_event_logo}
								alt="Logo Preview"
								className="w-full h-full object-cover rounded-full"
							/>
							<button
								className="absolute bottom-0 right-0"
								onClick={() => {
									setLogoPreview(prevData => ({
										image: prevData.initialImg
											? prevData.initialImg
											: sample_event_logo,
										edited: false,
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
							src={logoPreview.image ? logoPreview.image : sample_event_logo}
							alt="Sample Image"
							className="w-full h-full object-cover rounded-full"
						/>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="title">Event title</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="title"
						id="title"
						placeholder="Enter the event title"
						value={eventData.title}
						onChange={onInputChange}
					/>
                    <label htmlFor="description">Event description</label>
					<textarea
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="description"
						id="description"
						rows="5"
						placeholder="Describe about event"
						value={eventData.description}
						onChange={onInputChange}
					/>
					<label htmlFor="venue">Event venue</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="venue"
						id="venue"
						placeholder="Enter the venue of event"
						value={eventData.venue}
						onChange={onInputChange}
					/>
					<label htmlFor="eventTime">Event time</label>
					<input
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="datetime-local"
						name="eventTime"
						id="eventTime"
						placeholder="Set the time of event"
						value={eventData.eventTime}
						onChange={onInputChange}
					/>
					<label htmlFor="mode">Event mode</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="mode"
						id="mode"
						value={eventData.mode}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>
							Select mode of event
						</option>
						<option value="In-Person">In-Person</option>
						<option value="Virtual">Virtual</option>
						<option value="Hybrid">Hybrid</option>
					</select>
                    <label htmlFor="mode">Event tag</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="tag"
						id="tag"
						value={eventData.tag}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>Select event tag</option>
						<option value="In-Person">In-Person</option>
					</select>
                    <label htmlFor="category">Event category</label>
					<select
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						name="category"
						id="category"
						value={eventData.category}
						onChange={onInputChange}
					>
						<option value="" disabled hidden>Select event category</option>
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
					onClick={eventUpdateHandler}
					className="w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg"
				>
					Edit
				</button>
			</div>
		</div>
	);
}

export default OrgEditEvent;