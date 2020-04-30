import React, {useState, useEffect} from 'react';
import {  Button, Dropdown, Menu, Pagination } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {JobItem, Filters} from "../DashBoardComponent";
type JobListProps = {
    jobs: JobItem[],
    filters: Filters
}
const menu = (
    <Menu>
      <Menu.Item key="1">
        <UserOutlined />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <UserOutlined />
        3rd item
      </Menu.Item>
    </Menu>
  );

  const getElementByJobType = (jobType: string) => {
    switch(jobType){
      case "Full Time":
        return <span className="job-time fill-green">{jobType}</span>;
      case "Part Time":
        return <span className="job-time fill-yellow">{jobType}</span>;
      default:
        return <span className="job-time fill-blue">{jobType}</span>;
    }
  }
  const getJobItems = (item: JobItem) => {
    const {id, title, jobType, location, requiredSkills, desciption } = item;
    return (
      <div className="job-item" key={`${id}`}>
          <div className="job-header">
            <h1> {title}{getElementByJobType(jobType)}</h1>
            <h1>$44/hr</h1>
          </div>
          <span className="building blue"><i className="fa fa-building"></i><h4>Epic Coders</h4></span>
          <span className="country"><i className="fa fa-map green"></i><h4>{location}</h4></span>
          <h4>Reply Rate: <b>82%</b></h4>
          <p className="job-description">{desciption}</p>
          <ul className="skillset">
            {requiredSkills ? requiredSkills.split(",").map((item) => <li key={item}><h6>{item}</h6></li>) : null}
          </ul>
          <div className="seperator"></div>
      </div>
    )
  }
  
export default (props: JobListProps) => {
    const size = 5;
    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1);
    }, [props.filters])
    const onPageChange = (page: number) => {
        setPage(page);
    }
    const getJobs = () => {
        const startIndex = size * (page - 1);
        const endIndex = startIndex + size;
        let jobs: JobItem[] = [];
        if(props.jobs.length) {
            jobs =  props.jobs.slice(startIndex, endIndex)
        } 
        return jobs.map((item: JobItem) => getJobItems(item))
    }

    return (
        <section className="middle">
            <div className="job-list-header">
            <h1>Results ({props.jobs.length})</h1>
            <span><h6>Sort by</h6>
                <Dropdown overlay={menu}>
                <Button>
                    Relevance <DownOutlined />
                </Button>
                </Dropdown>
            </span>
            </div>
            {getJobs()}
            <div className="pagination">
                <Pagination 
                current={page} 
                pageSize={size} 
                size={"default"} 
                total={props.jobs.length} 
                onChange={onPageChange}
                />
            </div>
        </section>
    )
}