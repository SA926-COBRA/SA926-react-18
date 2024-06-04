import {ReactNode} from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return <div className="alert alert-primary alert-dismissible">
    {children}
    <button
      type="button"
      onClick={onClose}
      className="btn-close"
      data-bs-dismiss="alert-dismissible"
    />
  </div>;
};

export default Alert;
