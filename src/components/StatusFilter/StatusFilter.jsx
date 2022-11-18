import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import statusFilters from 'redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { BtnFilter } from './StatusFilter.styled';

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div>
      <h2>Filter by status</h2>
      <BtnFilter
        selected={filter === statusFilters.all}
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </BtnFilter>
      <BtnFilter
        selected={filter === statusFilters.active}
        type="button"
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </BtnFilter>
      <BtnFilter
        selected={filter === statusFilters.completed}
        type="button"
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </BtnFilter>
    </div>
  );
};
export default StatusFilter;
