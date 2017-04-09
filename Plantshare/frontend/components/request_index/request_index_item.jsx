import React from 'react';

const RequestIndexItem = ({ request, requester, router }) => {
	const STATUSES = ['pending', 'approved', 'denied'];

  return (
    <li className="request-index-item">
    		<span>{requester.username.replace(/\b\w/g,
						l => l.toUpperCase())} asked </span>
        <span>{request.comment}</span>
        <select defaultValue="pending">
        	{STATUSES.map((status, i) => {
        			return <option value={status} key={i}>{status}</option>;
        		})
        	}
        </select>
    </li>
  );
};

export default RequestIndexItem;
