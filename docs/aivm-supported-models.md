# Supported Models

AIVM currently supports the following pre-trained models for specific learning tasks. You can either utilize these existing models or use the [training scripts](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples) to produce your own custom-trained versions:

## BertTiny
- [SMS Spam Classification](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/1-getting-started.ipynb)
  - Binary classification for detecting spam messages
  - Input: Text string
  - Output: Binary classification (spam/not spam)
- [Movie Rating Sentiment Analysis](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/3a-upload-your-bert-tiny-model.ipynb)
  - [Training Script](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/2a-fine-tuning-bert-tiny.ipynb)
  - Sentiment analysis for movie reviews
  - Input: Text string
  - Output: Sentiment score (-1 to 1) for positive and negative
- [Tweet Sentiment Analysis](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/3c-upload-your-bert-tiny-for-tweet-sentiment.ipynb)
  - [Training Script](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/2c-fine-tuning-bert-tiny-tweet-dataset.ipynb)
  - Sentiment analysis for tweets in
  - Input: Text string
  - Output: Sentiment score (-1 to 1) for positive, neutral and negative

## LeNet5
- [Handwritten Digit Recognition (MNIST)](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/1-getting-started.ipynb)
  - Classification of handwritten digits
  - Input: 28x28 grayscale image
  - Output: Digit classification (0-9)
- [Cats vs Dogs Classification](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/3b-upload-your-lenet5-model.ipynb)
  - [Training Script](https://github.com/NillionNetwork/nillion-aivm/blob/main/examples/2b-fine-tuning-lenet5.ipynb)
  - Binary image classification
  - Input: 28x28 grayscale image
  - Output: Binary classification (cat/dog)

## Project Ideas

- [Nillion AIVM Discord bot for message sentiment analysis](https://github.com/NillionNetwork/aivm-discord-bot)
- [Nillion AIVM Slack not for hotdog image detection](https://github.com/tom-todo-repo)