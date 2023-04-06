import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies/CardResumeHobbies";

export default function Resume({ showModal, setStep, setModal }: any) {
  const favouriteFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("iconFruit");

  const data = localStorage.getItem("hobbies");
  if (!data) {
    throw new Error("User not found");
  }

  const hobbiesStorage = JSON.parse(data);
  const addittionalHobbie = localStorage.getItem("adittionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm = () => {
    localStorage.clear();
    setModal(false);
    setStep(1);
  };

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={clearForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Congratulations! 🥳 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Here you are your resume</h4>
        <CardGroup className="mt-4">
          {favouriteFruit && fruitIcon && (
            <CardResume
              title={fruitIcon}
              subtitle="Your favourite fruit is"
              text={favouriteFruit}
            />
          )}
          {hobbiesStorage && (
            <CardResumeHobbies
              subtitle="Your hobbies"
              text={addittionalHobbie}
              hobbiesStorage={hobbiesStorage}
            />
          )}
          {comment && (
            <CardResume
              subtitle="And for the last this is the comment"
              text={comment}
            />
          )}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clearForm} variant="outline-dark">
          Exit and clear form
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
