export default function Banner({ children, status }) {
  let text;
  if (status === 'success') text = 'Congratulations!';
  if (status === 'warning') text = 'Attention';
  if (status === 'error') text = 'There is a problem with your application';
  if (status === 'neutral') text = 'Update available';

  return (
    <div className={`banner banner-${status}`}>
      <h1>{text}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}
