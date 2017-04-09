import React from 'react';

const RequestIndexItem = ({ request, requester, router, updateRequest }) => {
	const STATUSES = ['pending', 'approved', 'denied'];
	let updatedRequest = {
		id: request.id,
		user_id: request.user_id,
		plant_id: request.plant_id,
		comment: request.comment,
		status: request.status
	};

	const handleUpdate = e => {
		e.preventDefault();
		updatedRequest[status] = e.target.value;
		updateRequest(updatedRequest)
			.then(data => router.push(`/plants/${data.plant_id}`));
	};

  return (
    <li className="request-index-item">
    		<span>{requester.username.replace(/\b\w/g,
						l => l.toUpperCase())} asked </span>
        <span>{request.comment}</span>
        <select defaultValue={request.status}
					onChange={e => handleUpdate(e)}>
        	{STATUSES.map((status, i) => {
        			return <option value={status} key={i}>{status}</option>;
        		})
        	}
        </select>
    </li>
  );
};

export default RequestIndexItem;
