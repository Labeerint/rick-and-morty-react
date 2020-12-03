import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Typography
} from 'antd';

const { Title } = Typography;
const { Option } = Select;


const Filters = ({onFilter, currentStatus, currentSpecies, currentGender}) => {
    const [componentSize, setComponentSize] = useState('');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    function onSelectStatus(value){
        onFilter({
            name: 'currentStatus',
            property: value
        })
    }

    function onSelectGender(value){
        onFilter({
            name: 'currentGender',
            property: value
        })
    }

    function onInputSpecies(e){
        onFilter({
            name: 'currentSpecies',
            property: e.target.value
        })
    }

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <>
            <Form
                style={{ marginLeft: 20 }}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Title level={3}>Filters</Title>
                <Form.Item label="Status">
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a status"
                        optionFilterProp="children"
                        onChange={onSelectStatus}
                        value={currentStatus}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="Alive">Alive</Option>
                        <Option value="Dead">Dead</Option>
                        <Option value="unknown">unknown</Option>
                        <Option value="">All</Option>
                    </Select>,
                </Form.Item>
                <Form.Item label="Species ">
                    <Input style={{ width: 200 }}
                           placeholder="Input a species"
                           onChange={onInputSpecies}
                           value={currentSpecies}/>
                </Form.Item>
                <Form.Item label="Gender ">
                    <Select
                        showSearch
                        value={currentGender}
                        style={{ width: 200 }}
                        placeholder="Select a gender"
                        optionFilterProp="children"
                        onChange={onSelectGender}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="">All</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Genderless">Genderless</Option>
                        <Option value="unknown">unknown</Option>
                    </Select>,
                </Form.Item>
            </Form>
        </>
    );
};

export default Filters