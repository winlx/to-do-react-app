import React, { useCallback } from 'react';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import hasErrors from '../helpers/antForm/hasErrors';
import { addTask } from '../state/actions';

function AddingTask(props) {
  const {
    dispatch,
  } = props;

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldValue,
    validateFields,
    resetFields,
  } = props.form;

  const submit = useCallback(
    () => {
      validateFields();

      const taskVal = getFieldValue('task');

      if (!taskVal) return;

      dispatch(addTask(taskVal));
      resetFields();
    },
    [
      dispatch,
      validateFields,
      getFieldValue,
      resetFields,
    ],
  );

  return (
    <Row>
      <Col span={18}>
        <Form.Item>
          {getFieldDecorator(
            'task',
            {
              rules: [{ required: true, message: 'Введите описание задачи!' }],
            },
          )(<Input
            prefix={<Icon type="schedule" />}
            placeholder="Описание задачи"
          />)
          }
        </Form.Item>
      </Col>
      <Col offset={1} span={5}>
        <Form.Item>
          <Button
            shape="circle"
            icon="plus"
            onClick={submit}
            disabled={hasErrors(getFieldsError())}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Form.create({ name: 'addingTask' })(AddingTask);
