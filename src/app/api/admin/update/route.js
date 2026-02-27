import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { type, data } = await request.json();
        let filePath;

        // Define paths based on data type
        switch (type) {
            case 'products':
                filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
                break;
            case 'gallery':
                filePath = path.join(process.cwd(), 'src', 'data', 'gallery.json');
                break;
            case 'posts':
                filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
                break;
            default:
                return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }

        // Write the updated data to the file
        await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');

        return NextResponse.json({ success: true, message: `Updated ${type} successfully` });
    } catch (error) {
        console.error('Error writing file:', error);
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
    }
}
