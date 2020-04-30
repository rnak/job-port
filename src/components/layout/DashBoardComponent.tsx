import React, {useState, useEffect} from 'react';
import { Input } from 'antd';
import Filters from "./filters/Filters";
import JobList from "./joblist/JobList";
import Footer from "../footer/footer"
import TrendingJobs from "./trendingJobs/TrendingJobs";
import styled from 'styled-components';
import queryString from 'query-string'
import {get} from "../../xhr";

const { Search } = Input;
const StyledSearch = styled(Search)`
  margin: 25px 0 30px 0;
  border: none;
  box-shadow: 0 0 17px rgba(0,0,0,0.25);
`
export type Filters = {
    job_type: string[],
    requiredSkills: string[],
    location: string[],
    title: string[],
    description: string[]
}
export const Initial_filter: Filters = {
    job_type: [],
    requiredSkills: [],
    location: [],
    title: [],
    description: []
}
export type JobItem = {
    desciption: string,
    id: number,
    jobType: string,
    location: string,
    requiredSkills: string,
    salarymax: string,
    salarymin: string,
    title: string,
}
export type JobListProps = {
    jobs: JobItem[],
}
const getQuery = (filters: Filters) => {
    console.log(filters);
    return queryString.stringify(filters, {arrayFormat: 'comma'});
}
export default () => {
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [filters, setFilters] = useState<Filters>(Initial_filter);

  useEffect(() => {
    const query = getQuery(filters);
    const url = query ? `http://localhost:9090/api/jobdescriptions/search?${query}`: 
    `http://localhost:9090/api/jobdescriptions/`;

    get(url).then((response) => {
        setJobs(response);
    }).catch((error) => {
        alert("Something Went Wrong please try again!");
    })

  }, [filters]);

  return (
    <>
      <div className="main">
        <StyledSearch 
            placeholder="Search a keyword(PHP, React, Node, Java...)" 
            enterButton="Search" 
            size="large" 
            onSearch={value => console.log(value)}
        />

        <section className="wrapper">
          <Filters filters={filters} setFilters={setFilters} />
          <JobList jobs={jobs} filters={filters}/>
          <TrendingJobs/>
        </section>
      </div>
      <Footer/>
    </>
  )
}