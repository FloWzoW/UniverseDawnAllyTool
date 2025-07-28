import React from "react";

const Navigation = (props) => {

    return (
        <nav class="w-64 shadow-md p-4">
            <h1 className="text-xl font-bold mb-6">Navigation</h1>
            <ul className="space-y-3">
                <li><a href="#" class="text-blue-600 hover:underline">🏠 Home</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">🛫 Flüge</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">📦 Fracht</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">⚙️ Einstellungen</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;