import { NextRequest, NextResponse } from 'next/server';
import {
  fetchTodos,
  todoService,
} from '@/services/todoService';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get('limit')) || 15;
    const skip = Number(searchParams.get('skip')) || 0;

    const data = await fetchTodos({
      limit,
      skip,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('GET /api/todos error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil data Todo',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.todo || typeof body.todo !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Judul Todo wajib diisi',
        },
        { status: 400 }
      );
    }

    const newTodo = await todoService.createTodo({
      todo: body.todo,
      completed: body.completed ?? false,
      userId: body.userId ?? 1,
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error('POST /api/todos error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat Todo',
      },
      { status: 500 }
    );
  }
}