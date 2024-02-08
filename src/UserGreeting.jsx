import propTypes from "prop-types";
function UserGreeting(props) {
  const welcomeMsg = <h2 className="Welcome-msg">Welocome {props.userName}</h2>;
  const denyMsg = <h2 className="deny-msg">please log in to continue</h2>;
  return props.isLoggedin ? welcomeMsg : denyMsg;
}
UserGreeting.propTypes = {
  isLoggedin: propTypes.bool,
  userName: propTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedin: "true",
  userName: "Guest",
};
export default UserGreeting;
