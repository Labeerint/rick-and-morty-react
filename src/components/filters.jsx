import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Typography
} from 'antd';
import store from "../store";
import {observer} from "mobx-react-lite";
const { Title } = Typography;
const { Option } = Select;


const Filters = observer(() => {
    const [componentSize, setComponentSize] = useState('');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    function onSelectStatus(value){
        store.onFilter({
            name: 'currentStatus',
            property: value
        })
    }

    function onSelectGender(value){
        store.onFilter({
            name: 'currentGender',
            property: value
        })
    }

    function onInputSpecies(e){
        store.onFilter({
            name: 'currentSpecies',
            property: e.target.value
        })
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
                        value={store.currentStatus}
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
                           value={store.currentSpecies}/>
                </Form.Item>
                <Form.Item label="Gender ">
                    <Select
                        showSearch
                        value={store.currentGender}
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
});

export default Filters