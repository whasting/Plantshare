export const fetchRequests = () => (
  $.ajax({
    url: 'api/requests',
  })
);

export const fetchRequest = id => (
	$.ajax({
		url: `api/requests/${id}`
	})
);

export const createRequest = request => (
	$.ajax({
		url: 'api/requests',
		method: 'POST',
		data: { request }
	})
);

export const updateRequest = request => (
	$.ajax ({
		url: `api/requests/${request.id}`,
		method: 'PATCH',
		data: { request }
	})
);

export const deleteRequest = id => (
	$.ajax ({
		url: `api/requests/${id}`,
		method: 'DELETE'
	})
);