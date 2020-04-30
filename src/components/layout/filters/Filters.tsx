import React from 'react';
// import { Menu} from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { FilterHeader, JobDropDown, MultiSelect } from './elements';
import { Initial_filter, Filters } from '../DashBoardComponent';

type Props = {
    filters: Filters,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}
export default (props: Props) => {

    const { job_type, location, title, description } = props.filters;
    const job_type_refs = {
        hourlyRef: React.createRef<HTMLInputElement>(),
        partTimeRef: React.createRef<HTMLInputElement>(),
        fullTimeRef: React.createRef<HTMLInputElement>()
    }

    const onJobTypeCheckboxChange = () => {
        const job_type = Object.values(job_type_refs).filter((ref: React.RefObject<any>) => {
            return ref.current && ref.current.checked; 
        }).map((ref: React.RefObject<any>) => {
            return ref.current.name;
        })
        console.log(job_type)
        props.setFilters({ ...props.filters, job_type })
    }

    const onLocationChange = (location: string[]) => props.setFilters({ ...props.filters, location });
    const onTitleChange = (title: string[]) => props.setFilters({ ...props.filters, title });
    const onDescriptionChange = (description: string[]) => props.setFilters({ ...props.filters, description });

    return (
        <section className="left">
            <FilterHeader title="FILTER" clearText={"Clear all filters"} onClear={() => props.setFilters(Initial_filter)} />
            <div className="seperator"></div>
            <FilterHeader title="Description" onClear={() => props.setFilters({ ...props.filters, description: [] })} />
            <MultiSelect defaultValue={description} onChange={onDescriptionChange}/>
            <FilterHeader title="Availability" icon onClear={() => props.setFilters({ ...props.filters, job_type: [] })} />
            <div className="checkbox filter-margin">
                <span><input type="checkbox" checked={job_type.indexOf("Hourly") !== -1} onChange={onJobTypeCheckboxChange} name="Hourly" ref={job_type_refs.hourlyRef} />Hourly</span>
                <span><input type="checkbox" checked={job_type.indexOf("Part Time") !== -1} onChange={onJobTypeCheckboxChange} name="Part Time" ref={job_type_refs.partTimeRef} />Part-time</span>
                <span><input type="checkbox" checked={job_type.indexOf("Full Time") !== -1} onChange={onJobTypeCheckboxChange} name="Full Time" ref={job_type_refs.fullTimeRef} />Full-time</span>
            </div>
            <FilterHeader title="Job type" icon onClear={() => props.setFilters({ ...props.filters, job_type: [] })} />
            <JobDropDown onClick={(item: any) => props.setFilters({ ...props.filters, job_type: [item.key] })}>
                {job_type.length === 1 ? job_type[0] : "Job type"}
            </JobDropDown>
            <FilterHeader title="Pay rate / hr($)" icon onClear={() => console.log("no filter applied for this field")} />
            <div className="pay-rate" >
                <input type="text" />
                <span>-</span>
                <input type="text" />
            </div>
            <div className="checkbox filter-margin">
                <span>
                    <input type="checkbox" id="Hourly" name="Hourly" value="Hourly" />Include profiles without pay rates</span>
            </div>
            <FilterHeader title="Experience level" onClear={() => console.log("no filter applied for this field")} />
            <JobDropDown onClick={(item: any) => props.setFilters({ ...props.filters, job_type: [item.key] })}>
                {"Experience"}
            </JobDropDown>
            <FilterHeader title="Countries" onClear={() => props.setFilters({ ...props.filters, location: [] })} />
            <MultiSelect defaultValue={location} onChange={onLocationChange} />
            <FilterHeader title="Title" onClear={() => props.setFilters({ ...props.filters, title: [] })} />
            <MultiSelect defaultValue={title} onChange={onTitleChange}/>
        </section>
    )
} 