import BodyMediumMedium from "../text/BodyMediumMedium";

const CheckBox = (props) => {
  return (
    <div className="flex gap-[10px]">
      <input
        type="checkbox"
        className={props.checked ? "bg-primary-400" : "bg-gray-300"}
        checked={props.checked}
        disabled={props.disabled}
        name={props.name}
      />
      <label>
        <BodyMediumMedium text={props.label} />
      </label>
    </div>
  );
};

export default CheckBox;
