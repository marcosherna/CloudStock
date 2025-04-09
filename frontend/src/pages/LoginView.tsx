import { Button, Card, Input, Form, Checkbox } from "antd";

export default function LoginView() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <Card className="md:w-80 shadow-lg">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-gray-900">Iniciar Sesion</h1>

          <div className="flex items-center justify-center my-2">
            <span className="w-20 border-t border-gray-300 my-2"></span>
            <span className="text-sm text-gray-400 px-3">Email</span>
            <span className="w-20 border-t border-gray-300 my-2"></span>
          </div>
        </div>

        <Form variant="outlined" layout="vertical">
          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="!mb-3"
          >
            <Input placeholder="Email" type="email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            name="Password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
            className="!mb-3"
          >
            <Input
              placeholder="Password"
              type="password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item className="!mb-3 !mt-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recordarme</Checkbox>
            </Form.Item>
            <a
              className="float-right text-sm text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 "
              href="#"
            >
              Cambiar contrasenia?
            </a>
          </Form.Item>

          <Form.Item className="!my-3">
            <Button className="!w-full" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>

          <Form.Item noStyle>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              No tienes cuenta?{" "}
              <a
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
                href="#"
              >
                Registrate
              </a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
