// Core
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    /**
     * Предназначен для SSR (но пока ещё не работает)
     * Вызывается сразу после выброса ошибки любым компонентом-потомком
     * Сайд-эффекты делать нельзя ❌
     */
    static getDerivedStateFromError(error) {
        console.log('→ error:', error);

        return {
            error,
        };
    }

    state = {
        error: null,
        info:  null,
    };

    /**
     * Все методы, оканчивающиеся на did не срабатывает в окружении SSR
     * Этот метод только для клиента
     * Сайд-эффекты делать можно ✅
     */
    componentDidCatch(_, info) {
        this.setState({
            info,
        });

        console.log('→ logged to server info:', info);
    }

    render() {
        const { error, info } = this.state;

        if (error) {
            return (
                <div>
                    <h1>Хьюстон, у нас проблема! 😱</h1>
                    <p>{error && error.toString()}</p>
                    <pre>
                        Component Stack Error Details:
                        {info && info.componentStack}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}
