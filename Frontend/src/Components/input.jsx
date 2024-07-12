export default function Input({ label, placeholder, onChange }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
