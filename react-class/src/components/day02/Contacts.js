const Contacts = (props) => { // property returning React element
    return (
    <div>
        <h3>{ props.name }</h3>
        <p>I am { props.age } years old, and I graduated from { props.school } in { props.graduationYear }.</p>
    </div>
    );
};

export default Contacts;