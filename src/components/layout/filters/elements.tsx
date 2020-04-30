import React from 'react';
import { Menu, Button, Dropdown, Select } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
type JobDropDownProps = {
    onClick: (item: any) => void,
    children: React.ReactNode
}

type FilterHeaderProps = {
    icon?: boolean,
    title: string,
    clearText?: string,
    onClear: () => void,
}

type MultiSelectProps = {
    defaultValue?: string[],
    onChange?: (value: any) => void
}
export const JobDropDown = (props: JobDropDownProps) => {
    return (
        <Dropdown overlay={
            <Menu onClick={props.onClick}>
                <Menu.Item key="Full Time">
                    <UserOutlined />
                    Full Time
                </Menu.Item>
                <Menu.Item key="Part Time">
                    <UserOutlined />
                    Part Time
                </Menu.Item>
                <Menu.Item key="Hourly">
                    <UserOutlined />
                    Hourly
                </Menu.Item>
            </Menu>
        }>
            <Button style={{ height: "40px", width: "100%", textAlign: "left", margin: "10px 0 30px 0" }}>
                {props.children}
                <DownOutlined style={{ float: "right", lineHeight: "25px" }} />
            </Button>
        </Dropdown>
    )
}

export const FilterHeader = (props: FilterHeaderProps) => {
    return (
        <div className="filters">
            <h1>{props.icon ? <span>{props.title}<i className="fa fa-info-circle info-icon"></i></span> : props.title}</h1>
            <h6 onClick={props.onClear}>{props.clearText ? props.clearText : "clear"}</h6>
        </div>
    )
}

export const MultiSelect = (props: MultiSelectProps) => {
    return (
        <Select size={"large"} mode="tags" style={{ width: '100%', margin: "10px 0 30px 0" }} defaultValue={props.defaultValue ? props.defaultValue : []} onChange={props.onChange} tokenSeparators={[',']}>
            {[]}
        </Select>
    )
}