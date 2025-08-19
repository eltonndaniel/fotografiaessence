import os
import json
import urllib.parse

# Pasta onde estão as categorias
base_dir = "fotos"

# Extensões de imagem que queremos incluir
extensoes = (".jpg", ".jpeg", ".png", ".gif")

# Dicionário que vai armazenar as imagens
imagens = {}

# Percorre cada pasta dentro de base_dir
for categoria in os.listdir(base_dir):
    categoria_path = os.path.join(base_dir, categoria)
    if os.path.isdir(categoria_path):
        arquivos = []
        for f in os.listdir(categoria_path):
            if f.lower().endswith(extensoes):
                # Caminho relativo completo com 'fotos/' e barras corretas
                caminho = os.path.join(base_dir, categoria, f)
                caminho = caminho.replace("\\", "/")  # substitui \ por /
                caminho = urllib.parse.quote(caminho) # codifica espaços e caracteres especiais
                arquivos.append(caminho)
        imagens[categoria] = arquivos

# Salva o JSON
with open("imagens.json", "w", encoding="utf-8") as f:
    json.dump(imagens, f, indent=2, ensure_ascii=False)

print("JSON criado com sucesso! Arquivo: imagens.json")
