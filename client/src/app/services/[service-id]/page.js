

export default function ServicePage({ params }) {
  const { 'service-id': serviceId } = params;

  console.log("this is the service id", serviceId);

  return (
    <div>
      <h1>Service Page</h1>

      {serviceId === '1' && <p>This is the Cleaning Service.</p>}
      {serviceId === '2' && <p>This is the Plumbing Service.</p>}
      {!['cleaning', 'plumbing'].includes(serviceId) && <p>Unknown service.</p>}
    </div>
  );
}
