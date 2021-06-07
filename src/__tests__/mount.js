import { render, fireEvent } from '@testing-library/vue';
import Home from "../views/Home.vue";

test('Render Home', async () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(Home);

    getByText("Login to your account");

    const loginButton = getByText('Login');

    await fireEvent.click(loginButton);

    getByText("Please enter your email and password");

})