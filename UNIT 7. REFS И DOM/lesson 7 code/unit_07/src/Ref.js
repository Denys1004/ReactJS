function Ref(props) {
    return (
        <div>
            <h2>Ref</h2>
            <div ref={refOut}>{props.a2}</div>
        </div>
    );
}

export default Ref;