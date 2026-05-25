import CreateTaskModal from "./CreateTaskModal";

export default function EditTaskModal({ open, onClose, task, onSubmit }) {
  return (
    <CreateTaskModal
      open={open}
      onClose={onClose}
      onSubmit={(data) => onSubmit?.({ ...task, ...data })}
    />
  );
}
