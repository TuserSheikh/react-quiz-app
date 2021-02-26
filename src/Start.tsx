import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export type StartProps = {
  handleChange: React.ChangeEventHandler<{ value: unknown }>;
  handleStart: () => void;
  questionCount: number;
};

const Start: React.FC<StartProps> = ({
  handleChange,
  handleStart,
  questionCount,
}) => {
  return (
    <>
      <p>How many question do you want?</p>
      <FormControl>
        <InputLabel id="question">Questions</InputLabel>
        <Select
          labelId="question"
          id="question"
          value={questionCount}
          onChange={handleChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleStart}
      >
        Start
      </Button>
    </>
  );
};

export default Start;
