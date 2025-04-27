import {
  Button,
  Form as AntForm,
  Input,
  Switch,
  ColorPicker,
  theme,
} from "antd";
import { generate, green, presetPalettes, red } from "@ant-design/colors";
import type { ColorPickerProps } from "antd";
import type { TinyColor } from "@ctrl/tinycolor";

import { Category } from "../../../../models";

type Presets = Required<ColorPickerProps>["presets"][number];

function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
    key: label,
  }));
}

interface FormModel {
  id?: number;
  name: string;
  description: string;
  status?: boolean;
  color: TinyColor;
  created_at?: string;
  updated_at?: string;
}
export default function Form({
  onSubmit,
}: {
  onSubmit: (category: Category) => void;
}) {
  const [ form ] = AntForm.useForm<FormModel>();

  const { token } = theme.useToken();
  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
  });

  const handleSubmit = (category: FormModel) => {
    const categoryData: Category = {
      ...category,
      color: category.color ? category.color.toRgbString() : "",
      status: category.status ? true : false,
    } as Category;

    console.log("categoryData", categoryData);
    onSubmit(categoryData);
  };

  return (
    <AntForm layout="vertical" onFinish={handleSubmit} form={form}>
      <AntForm.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the name!" }]}
      >
        <Input placeholder="Name" autoComplete="off" />
      </AntForm.Item>

      <AntForm.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input.TextArea placeholder="Description" autoComplete="off" rows={4} />
      </AntForm.Item>

      <AntForm.Item>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <AntForm.Item name="color" noStyle>
              <ColorPicker
                presets={presets}
                defaultValue="#1677ff"
                arrow
                placement="left"
              />
            </AntForm.Item>

            <AntForm.Item name="status" valuePropName="checked" noStyle>
              <Switch></Switch>
            </AntForm.Item>
          </div>

          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </AntForm.Item>
    </AntForm>
  );
}
