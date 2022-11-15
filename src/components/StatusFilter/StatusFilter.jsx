import { BtnFilter } from './StatusFilter.styled';

const StatusFilter = () => {
  return (
    <div>
      <h2>Filter by status</h2>
      <BtnFilter type="button" onClick={() => console.log('click')}>
        All
      </BtnFilter>
      <BtnFilter type="button" onClick={() => console.log('click')}>
        Active
      </BtnFilter>
      <BtnFilter type="button" onClick={() => console.log('click')}>
        Completed
      </BtnFilter>
    </div>
  );
};
export default StatusFilter;
