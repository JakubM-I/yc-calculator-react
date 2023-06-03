import "./style.css";

const FieldSet = ({children}) => (
    <fieldset className="exchangeForm__dataInput">
        {children}
    </fieldset>
);

export default FieldSet;