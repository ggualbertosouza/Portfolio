type infoProps = {
  name?: string;
  email?: string;
  date?: string;
};

export default function ContactCode({ name, email, date }: infoProps) {
  return (
    <div>
      <pre className="text-[8px] sm:text-[12px] lg:text-[16px] border border-secondary bg-[#011221] p-4 rounded text-start">
        {`
const button = document.querySelector('#sendBtn')  
const message = {
name: '`}
        {<span className="text-green">{name}</span>}
        {`', 
email: '`}
        {<span className="text-purple">{email}</span>}
        {`', 
message: '', 
date: '`}
        {<span className="text-orange">{date}</span>}
        {`',
    }
button.addEventListener('click', () => {
form.send(message); 
})
`}
      </pre>
    </div>
  );
}

{
  ``;
}
