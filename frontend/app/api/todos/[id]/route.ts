import { NextRequest, NextResponse } from 'next/server';
import { todoService } from '@/services/todoService';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const todo = await todoService.fetchTodoById(id);

    return NextResponse.json(todo);
  } catch (error) {
    console.error('GET /api/todos/[id] error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Todo tidak ditemukan',
      },
      { status: 404 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const updatedTodo = await todoService.updateTodoStatus(
      id,
      body.completed
    );

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('PUT /api/todos/[id] error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengubah Todo',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const deletedTodo = await todoService.deleteTodo(id);

    return NextResponse.json(deletedTodo);
  } catch (error) {
    console.error('DELETE /api/todos/[id] error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus Todo',
      },
      { status: 500 }
    );
  }
}