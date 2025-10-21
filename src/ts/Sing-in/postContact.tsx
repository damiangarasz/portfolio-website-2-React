export default async function postContact(
  name: string,
  email: string,
  message: string
) {
  const response = await fetch('https://formspree.io/f/myzyoyzv', {
    method: 'POST',
    headers: {},
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error('Response się wykrzaczył lol');
  }

  return response.json();
}
