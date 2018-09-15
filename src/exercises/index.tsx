import React, { Component } from "react";
import mockData from "./mockData";
import Exercise from "./Exercise";
import SubTitle from "../shared/SubTitle";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import Form from "./Form";
import Table from "./Table";

interface Props {}

interface State {
  showForm: boolean;
  selectedExercise: Exercise | null;
  exercises: Exercise[];
}

const emptyState = (): {
  showForm: boolean;
  selectedExercise: Exercise | null;
} => ({ showForm: false, selectedExercise: null });

export default class Exercises extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { ...emptyState(), exercises: mockData };
  }

  showForm = (exercise: Exercise) => {
    this.setState(() => ({
      showForm: true,
      selectedExercise: { ...exercise }
    }));
  };

  hideForm = () => {
    this.setState(emptyState());
  };

  handleChange = (name: string) =>
    this.setState(prevState => ({
      selectedExercise: { ...prevState.selectedExercise, name }
    }));

  handleSubmit = () => {
    this.setState(prevState => ({
      ...emptyState(),
      exercises: [prevState.selectedExercise].concat(
        prevState.exercises.filter(
          exercise => exercise.id !== prevState.selectedExercise.id
        )
      )
    }));
  };

  render() {
    return (
      <div>
        <SubTitle>Exercises</SubTitle>
        <Button onClick={() => this.showForm(Exercise.new())}>
          Add exercise
        </Button>
        <Table exercises={this.state.exercises} onEdit={this.showForm} />
        {this.state.showForm && (
          <Modal onClose={this.hideForm}>
            <Form
              name={this.state.selectedExercise.name}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </Modal>
        )}
      </div>
    );
  }
}
