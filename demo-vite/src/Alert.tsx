interface AlertProps {
    text: string;
    prop2: string;
}

// FC: function cmoponents
// object Destruturing
// const {text, prop2} = props;
const Alert: React.FC<AlertProps> = (props: AlertProps) => {
    console.log(props.prop2);
    return (
      <div className="alert alert-primary" role="alert">
        {props.text}
      </div>
    );
};

export default Alert;
