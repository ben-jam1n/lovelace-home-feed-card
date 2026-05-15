export function subscribeNotifications (conn, onChange, eventType)
{
  const params = {
    type: "persistent_notification/subscribe",
  };
  
  const subscription = conn.subscribeMessage(
    (message) => onChange(),
    params
  );
  
  return () => {
    subscription.then((unsub) => unsub());
  };
};