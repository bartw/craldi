export default interface Action<T> {
  action: (item: T) => void;
  label: string;
}
