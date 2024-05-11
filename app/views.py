from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt


def main(request):
    return render(request, "main.html")


@csrf_exempt
def Answer_Prompt(request):
    user_message = request.POST["userMessage"]
    print(user_message)
    response = get_response(user_message)
    return HttpResponse(response)


def get_response(user_message):
    return "I'm just a demo chatbot. How can I assist you?"
